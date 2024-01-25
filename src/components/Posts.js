const Posts = ({ posts, loading, text }) => {
  //state:mutable
  //props:read only and immutable
  //fu chuan
  //子传父  callback
  //跨组建  redux context usereduce
  //hooks 不能在 if  state  while中调用

  return (
    <ul className="list-group">
      {loading && <h1>{text}</h1>}
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
