type typePost = {
  _id: string;
  title: string;
  author: [string];
  content?: string;
  image: string;
  desc: string;
};
type typePostValue = Omit<typePost, "_id">;
