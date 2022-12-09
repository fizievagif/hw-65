import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PageType} from "../../types";
import axiosApi from "../../axiosApi";

const Page = () => {
  const {pageName} = useParams();
  const [content, setContent] = useState<PageType>({
    title: '',
    content: ''
  });

  const fetchOnePage = useCallback(async () => {
    try {
      const response = await axiosApi.get('/pages.json');

      if (pageName) {
        setContent(response.data[pageName]);
      }
    } catch (e) {
      console.error(e);
    }
  }, [pageName]);

  useEffect(() => {
   void fetchOnePage();
  }, [fetchOnePage])

  return (
    <div>
      <h1>{content.title}</h1>
      <p className="card-text">{content.content}</p>
    </div>
  );
};

export default Page;