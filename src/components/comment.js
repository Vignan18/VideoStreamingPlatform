 export default Comment = ({ data }) => {
    const snippet = data.snippet.topLevelComment?data.snippet.topLevelComment.snippet:data.snippet;
    const authorName = snippet.authorDisplayName;
    const imageURL = snippet.authorProfileImageUrl;
    const commentText = snippet.textDisplay;
    return (
      <div className="flex p-2 rounded-lg my-2">
        <img
          className="w-12 h-12 rounded-full	"
          alt="img"
          src={imageURL}
        />
        <div className="px-3">
          <p className="font-bold">{authorName}</p>
          <p dangerouslySetInnerHTML={{__html: commentText}} />
        </div>
      </div>
    );
  };