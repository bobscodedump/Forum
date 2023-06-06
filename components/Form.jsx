import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share whatever's on your mind
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold font-inter text-gray-700">
            Your Post
          </span>

          <textarea
            value={post.post}
            onChange={(e) => setPost({ ...post, post: e.target.value })}
            placeholder="Write your post here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-semibold font-inter text-gray-700">
            Hashtag
            <span className="font-normal"> (eg: #webdev, #idea, #travel)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-1 gap-4">
          <Link href="/" className="text-gray-800 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-1 text-sm bg-blue-500 text-white rounded-full"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
