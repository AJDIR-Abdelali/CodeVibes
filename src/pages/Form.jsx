import React, { useState } from 'react';
import { createPost } from '../services/postService'; 



function Form() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    tags: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      content: formData.content,
      author: formData.author,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
      image: formData.image,
    };

    try {
      await createPost(payload);
      alert('Formulaire envoyé avec succès !');
    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
      alert("Échec de l'envoi du formulaire");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Create new Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Titre"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Contenu"
          rows="4"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Auteur"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (séparés par des virgules)"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
