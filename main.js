Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_quality:90
  });
  
  camera=document.getElementById("camera");
  Webcam.attach('#camera');
  
  function takesnapshot()
  {
      Webcam.snap(function(data_uri)
      
      {
          document.getElementById("result").innerHTML='<img id="capture_image"'+data_uri+'"/>';
      }
      );
  }
  console.log('ml5 version:',ml5.version);
  
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PB7mIApD4/',modelLoaded);
  
  function modelLoaded()
  {
      console.log('modelLoaded');
  }