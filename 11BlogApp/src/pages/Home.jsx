import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [userData]);

  const aboutSection = (
    <div className=" m-4">
    <div className="w-full py-4 px-20 mt-4 text-center bg-gray-100 rounded-lg ">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-8 w-full">
            <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-800">
              About TextAura
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to TextAura, where words come to life and ideas take flight.
              At TextAura, we believe in the power of storytelling and the magic of
              writing. Our platform is designed for writers of all levels to explore
              their creativity, share their insights, and connect with a community of
              like-minded individuals. Whether you're a seasoned author, a passionate
              blogger, or someone just beginning their writing journey, TextAura
              provides the tools and inspiration you need to craft compelling content.
              Join us as we celebrate the art of writing and uncover the limitless
              possibilities of the written word. Happy writing!
            </p>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );

  if (!userData) {
    return (
      <>
        {aboutSection}
        <div className="w-full py-4 px-0 text-center">
          <Container>
            <div className="w-full py-2 ">
              <button
                onClick={() => navigate('/login')}
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 underline"
              >
                Login to read posts
              </button>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      {aboutSection}
      <div className="w-full py-8 bg-gray-400">
        <Container>
          <div className="flex flex-wrap -mx-2">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
