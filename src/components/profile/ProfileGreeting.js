import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ru";

const ProfileGreeting = () => {
  const [value, setValue] = useState("");
  const handleChange = (e, editor) => {
    console.log(editor.getData());
  };
  return (
    <div className="col-md-8 text-center">
      <div className="greetings">
        <h1>Ваш профиль</h1>
        <span className="info-profile">
          Здесь вы можете отправлять сообщения и добавлять в базу данных
        </span>
      </div>
      <div className="text-editor d-flex justify-content-center">
        <CKEditor
          config={{
            language: "ru",
            placeholder: "Ваше сообщение...",
          }}
          editor={ClassicEditor}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary"
          style={{ background: "var(--bg-primary)" }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ProfileGreeting;
