// src/services/postService.js

export const createPost = async (postData) => {
    console.log("Data to send:", postData); 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Success" });
      }, 1000);
    });
  };
  