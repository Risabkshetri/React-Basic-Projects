import React, { useState, useEffect, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import './ImageClassifier.css';

const ImageClassifier = () => {
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const imageRef = useRef();

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      console.log('MobileNet model loaded successfully!');
    };
    loadModel();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageURL(URL.createObjectURL(file));
  };

  const classifyImage = async () => {
    if (!model || !imageURL) return;

    const results = await model.classify(imageRef.current);
    setResults(results);
    console.log('Classification results:', results);
  };

  return (
    <div className="image-classifier">
      <h2>AI Image Classifier</h2>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="file-input"
      />
      {imageURL && (
        <React.Fragment>
          <img 
            ref={imageRef} 
            src={imageURL} 
            alt="upload preview" 
            onLoad={classifyImage}
            className="image-preview"
          />
          <div className="results">
            <h3>Classification Results:</h3>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  {result.className}
                  <span className="confidence">
                    {(result.probability * 100).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ImageClassifier;