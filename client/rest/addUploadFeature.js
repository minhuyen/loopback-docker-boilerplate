const uploadLogo = (params) => {
  // console.log("Promise uploadLogo: ", params);
  return new Promise((resolve, reject) => {
    if(params.data.logo && params.data.logo.length){
      // console.log('test == file')
      const formData = new FormData();
      if (params.data.logo[0].rawFile instanceof File){
        // console.log("======instanceof File=========");
        formData.append('file', params.data.logo[0].rawFile);
      }
      const token = localStorage.getItem('token');
      fetch('/api/v1/Containers/logo/upload', {
        method: 'post',
        headers: {
          'Authorization': token
        },
        body: formData,
      })
        .then(response => response.json())
        .then(logo => {
          // console.log(logo);
          const fileName = logo["result"]["files"]["file"][0]["name"];
          const url =  `/api/v1/Containers/logo/download/${fileName}`;
          const tmp = {
            ...params,
            data: {
              ...params.data,
              logo: {
                url: url,
                title: "Business Logo"
              }
            }
          }
          resolve(tmp)
        });
    }else{
      resolve(params);
    }
  });
};

const uploadPhotos = (params) => {
  // console.log("Promise uploadPhotos: ", params);
  return new Promise((resolve, reject) => {
    if(params.data.photos && params.data.photos.length){
      const photos = params.data.photos.filter(photo => photo && photo.rawFile instanceof File);
      if (photos.length){
        const formData = new FormData();
        photos.map(photo => formData.append('photos', photo.rawFile))
        // console.log("addUploadCapabilities photos: ", photos);
        const token = localStorage.getItem('token');
        return fetch('/api/v1/Containers/photos/upload', {
          method: 'post',
          headers: {
            'Authorization': token
          },
          body: formData,
        })
        .then(response => response.json())
        .then(photos => {
          // console.log("======photos======: ", photos);
          const files = photos["result"]["files"]["photos"];
          let photoData = [];
          files.map(file => photoData.push({ url: `/api/v1/Containers/photos/download/${file.name}`, title: "Photo" }));
          // console.log("======photoData======: ", photoData);
          params = {
            ...params,
            data: {
              ...params.data,
              photos: photoData
            }
          }
          resolve(params);
        });
      }else{
        resolve(params);
      }
    }else{
      resolve(params);
    }
  });
};

const uploadAvatar = (params) => {
  // console.log("Promise uploadAvatar");
  return new Promise((resolve, reject) => {
    if(params.data.avatar && params.data.avatar[0].rawFile instanceof File ){
      const formData = new FormData();
      formData.append('file', params.data.avatar[0].rawFile);
      const token = localStorage.getItem('token');
      return fetch('/api/v1/Containers/avatar/upload', {
        method: 'post',
        headers: {
          'Authorization': token
        },
        body: formData,
      })
        .then(response => response.json())
        .then(avatar => {
          const fileName = avatar["result"]["files"]["file"][0]["name"];
          const url =  `/api/v1/Containers/avatar/download/${fileName}`;
          params = {
            ...params,
            data: {
              ...params.data,
              avatar: {
                url: url,
                title: "Avatar"
              }
            }
          }
          resolve(params);
        });
    }else{
      resolve(params);
    }
  });
}
const addUploadCapabilities = requestHandler => (type, resource, params) => {
  if ((type === 'UPDATE' || type === "CREATE") &&
    (resource === 'Businesses' || resource === 'User')){
    console.log("addUploadCapabilities: ",params.data);
    if( Object.prototype.toString.call( params.data.logo ) === '[object Array]' ) {
      console.log("addUploadCapabilities length: ", params.data.logo.length);
    }else{
      console.log("addUploadCapabilities length: 0");
    }

    return uploadLogo(params)
      .then(uploadPhotos)
      .then(uploadAvatar)
      .then(params => requestHandler(type, resource, params))
      .catch(error => {throw new Error(error.message);});
  }else {
    return requestHandler(type, resource, params);
  }
}

export default addUploadCapabilities;
