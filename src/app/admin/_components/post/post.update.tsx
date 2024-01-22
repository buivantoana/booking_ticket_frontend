import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { usePostMutation } from "@/hook/usePostMutation";
import { Editor } from "@tinymce/tinymce-react";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { parse } from "date-fns";
import { useEffect, useState } from "react";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdatePost = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;
  const [editorContent, setEditorContent] = useState<string>("");

  const { form, onFinish } = usePostMutation({
    action: "UPDATE",
    defaultValues: dataUpdate,
    content: editorContent,
    onSuccess: () => {
      form.resetFields();
      setIsUpdateModalOpen(false);
      setDataUpdate(null);
    },
  });

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        title: dataUpdate.title,
        desc: dataUpdate.desc,
      });
      setEditorContent(dataUpdate.content);
    }
  }, [dataUpdate]);

  const handleCloseUpdateModal = () => {
    form.resetFields();
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };
  return (
    <Modal
      title='Update Post'
      open={isUpdateModalOpen}
      onOk={() => form.submit()}
      width={1000}
      onCancel={() => handleCloseUpdateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={12}>
            <Form.Item
              label='Title'
              name='title'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={24}>
            <Form.Item
              label='Desc'
              name='desc'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <TextArea cols={3} />
            </Form.Item>
          </Col>

          <Col span={24} md={24}>
            <Editor
              apiKey='vr0wwkbvph803e16rtf0mauheh4p5jy4fiw0akbjnf1benb6'
              onEditorChange={handleEditorChange}
              value={editorContent}
              init={{
                height: 300,
                width: "100%",

                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "casechange blocks bold italic textcolor emoticons alignleft aligncenter alignright alignjustify  bullist numlist checklist  image media | undo redo ",

                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
              }}
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdatePost;
