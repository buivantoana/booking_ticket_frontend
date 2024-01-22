import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { usePostMutation } from "@/hook/usePostMutation";
import { PlusOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";
import {
  Modal,
  Input,
  Form,
  Row,
  Col,
  message,
  Select,
  DatePicker,
  DatePickerProps,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreatePost = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;
  const [editorContent, setEditorContent] = useState<string>("");

  const { form, onFinish } = usePostMutation({
    action: "CREATE",

    content: editorContent,
    onSuccess: () => {
      form.resetFields();
      setIsCreateModalOpen(false);
      setEditorContent("");
    },
  });

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <Modal
      title='Add Post'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      width={1000}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={24}>
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
          <Col span={24} md={8}>
            <Form.Item
              label='Image'
              name='image'
              valuePropName='fileList'
              getValueFromEvent={normFile}>
              <Upload name='image' action='/upload.do' listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Image</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24} md={24}>
            <Editor
              apiKey='vr0wwkbvph803e16rtf0mauheh4p5jy4fiw0akbjnf1benb6'
              onEditorChange={handleEditorChange}
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

export default CreatePost;
