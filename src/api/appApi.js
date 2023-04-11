import HttpClient from "../utils/HttpClient";
export async function getAllProf() {
  let result = await HttpClient.requestData("viewprofession", "GET");
  return result;
}
export async function createScreen(data) {
  let result = await HttpClient.requestData("createlogo", "POST", data);
  return result;
}
export async function getLogo() {
  let result = await HttpClient.requestData("viewlogo", "GET");
  return result;
}
export async function getAppModule() {
  let result = await HttpClient.requestData("get-app-module", "GET");
  return result;
}
export async function changeModulePriority(data) {
  let dataSend = data;
  let result = await HttpClient.requestData(
    "update-module-priority",
    "POST",
    dataSend
  );
  return result;
}
export async function getTheme(id) {
  let result = await HttpClient.requestData(`view-model-wise-app/${id}`, "GET");
  return result;
}
export async function getThemeDetail(id) {
  let result = await HttpClient.requestData(`get-theme/${id}`, "GET");
  return result;
}

export async function updateThemeElement(id, data) {
  let result = await HttpClient.requestData(
    `update-theme-by-appowner/${id}`,
    "PUT",
    data
  );
  return result;
}
export async function updateElementFeildList(data) {
  let result = await HttpClient.requestData(
    `theme-wise-element-fields`,
    "PUT",
    data
  );
  return result;
}

export async function uploadImage(data) {
  let result = await HttpClient.fileUplode("uploadlogoimage", "POST", data);
  return result;
}
export async function ecomAddCat(data) {
  let result = await HttpClient.requestData(
    "e-commerce/add-category",
    "POST",
    data
  );
  return result;
}
export async function ecomEditCat(id, data) {
  let result = await HttpClient.requestData(
    `e-commerce/update-category/${id}`,
    "PUT",
    data
  );
  return result;
}
export async function getEcomCat() {
  let response = await HttpClient.requestData(
    "e-commerce/view-category",
    "GET"
  );
  return response;
}
export async function deleteEcomCat(id) {
  let response = await HttpClient.requestData(
    `e-commerce/delete-category/${id}`,
    "PUT"
  );
  return response;
}
export async function editEcomCat(id, data) {
  let response = await HttpClient.requestData(
    `e-commerce/update-category/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function ecomAddSubCat(data) {
  let result = await HttpClient.requestData(
    "e-commerce/add-subcategory",
    "POST",
    data
  );
  return result;
}
export async function ecomEditSubCat(id, data) {
  let result = await HttpClient.requestData(
    `e-commerce/update-subcategory/${id}`,
    "PUT",
    data
  );
  return result;
}
export async function getEcomSubCat() {
  let response = await HttpClient.requestData(
    "e-commerce/view-subcategory",
    "GET"
  );
  return response;
}
export async function deleteEcomSubCat(id) {
  let response = await HttpClient.requestData(
    `e-commerce/delete-subcategory/${id}`,
    "PUT"
  );
  return response;
}
export async function ecomAddProduct(data) {
  let result = await HttpClient.requestData(
    "e-commerce/add-product",
    "POST",
    data
  );
  return result;
}
export async function ecomEditProduct(id, data) {
  let result = await HttpClient.requestData(
    `e-commerce/update-product/${id}`,
    "PUT",
    data
  );
  return result;
}
export async function getEcomProduct() {
  let response = await HttpClient.requestData("e-commerce/view-product", "GET");
  return response;
}
export async function deleteEcomProduct(id) {
  let response = await HttpClient.requestData(
    `e-commerce/delete-product/${id}`,
    "PUT"
  );
  return response;
}
export async function addEcomBanner(data) {
  let response = await HttpClient.requestData(
    `e-commerce/add-banner`,
    "POST",
    data
  );
  return response;
}
export async function editEcomBanner(id, data) {
  let response = await HttpClient.requestData(
    `e-commerce/update-banner/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function ecomBanner(id, data) {
  let response = await HttpClient.requestData(`e-commerce/view-banner`, "GET");
  return response;
}
export async function deleteEcomBanner(id) {
  let response = await HttpClient.requestData(
    `e-commerce/delete-banner/${id}`,
    "PUT"
  );
  return response;
}
export async function addOttTypes(data) {
  let response = await HttpClient.requestData(
    `ott/add-ott-types`,
    "POST",
    data
  );
  return response;
}
export async function getOttTypes(data) {
  let response = await HttpClient.requestData(`ott/view-ott-types`, "GET");
  return response;
}
export async function editOttTypes(id, data) {
  let response = await HttpClient.requestData(
    `ott/edit-ott-types/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function deleteOttTypes(id) {
  let response = await HttpClient.requestData(
    `ott/delete-ott-types/${id}`,
    "PUT"
  );
  return response;
}

export async function addOttCategories(data) {
  let response = await HttpClient.requestData(
    `ott/add-ott-categories`,
    "POST",
    data
  );
  return response;
}
export async function getOttCategories(data) {
  let response = await HttpClient.requestData(`ott/view-ott-categories`, "GET");
  return response;
}
export async function editOttCategories(id, data) {
  let response = await HttpClient.requestData(
    `ott/edit-ott-categories/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function deleteOttCategories(id) {
  let response = await HttpClient.requestData(
    `ott/delete-ott-categories/${id}`,
    "PUT"
  );
  return response;
}
export async function imageUploadOttCategory(data) {
  let response = await HttpClient.fileUplode(
    `ott/ott-categories-image`,
    "POST",
    data
  );
  return response;
}

export async function addOttGenre(data) {
  let response = await HttpClient.requestData(
    `ott/add-ott-genre`,
    "POST",
    data
  );
  return response;
}
export async function getOttGenre(data) {
  let response = await HttpClient.requestData(`ott/view-ott-genre`, "GET");
  return response;
}
export async function editOttGenre(id, data) {
  let response = await HttpClient.requestData(
    `ott/edit-ott-genre/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function deleteOttGenre(id) {
  let response = await HttpClient.requestData(
    `ott/delete-ott-genre/${id}`,
    "PUT"
  );
  return response;
}

export async function addOttVideo(data) {
  let response = await HttpClient.requestData(
    `ott/add-ott-video`,
    "POST",
    data
  );
  return response;
}
export async function getOttVideo(data) {
  let response = await HttpClient.requestData(`ott/view-ott-video`, "GET");
  return response;
}
export async function editOttVideo(id, data) {
  let response = await HttpClient.requestData(
    `ott/edit-ott-video/${id}`,
    "PUT",
    data
  );
  return response;
}
export async function deleteOttVideo(id) {
  let response = await HttpClient.requestData(
    `ott/delete-ott-video/${id}`,
    "PUT"
  );
  return response;
}
export async function uploadOttThumbImage(data) {
  let response = await HttpClient.fileUplode(
    `ott/ott-thumb-image`,
    "POST",
    data
  );
  return response;
}
export async function uploadOttVideo(data) {
  console.log(data);
  let response = await HttpClient.requestData(`ott/ott-addvideo`, "POST", data);
  return response;
}
export async function getOttVideos(data) {
  let response = await HttpClient.requestData(`ott/view-ott-video`, "GET");
  console.log("response", response);
  return response;
}

//  Podcast

//__________________________________________Podcast Type--------------------------------------
export async function AddPodcastType(data) {
  let response = await HttpClient.requestData(
    `podcast/add-podcast-type`,
    "POST",
    data
  );

  return response;
}
export async function EditPodcastType(id, data) {
  let response = await HttpClient.requestData(
    `podcast/update-podcast-type/${id}`,
    "PUT",
    data
  );

  return response;
}
export async function deletePodcastType(id) {
  let response = await HttpClient.requestData(
    `podcast/delete-podcast-type/${id}`,
    "PUT"
  );

  return response;
}

export async function GetPodcastType() {
  let response = await HttpClient.requestData(
    `podcast/get-podcast-type`,
    "GET"
  );

  return response;
}
//__________________________________________Podcast Genre--------------------------------------

export async function AddPodcastGenreApi(data) {
  let response = await HttpClient.requestData(
    `podcast/add-podcast-genre`,
    "POST",
    data
  );

  return response;
}
export async function EditPodcastGenre(id, data) {
  let response = await HttpClient.requestData(
    `podcast/update-podcast-genre/${id}`,
    "PUT",
    data
  );

  return response;
}
export async function deletePodcastGenre(id) {
  let response = await HttpClient.requestData(
    `podcast/delete-podcast-genre/${id}`,
    "PUT"
  );

  return response;
}

export async function GetPodcastGenre() {
  let response = await HttpClient.requestData(
    `podcast/get-podcast-genre`,
    "GET"
  );

  return response;
}
//___________________________________________Add Podcast---------------------------------------
export async function AddPodcast(data) {
  let response = await HttpClient.requestData(
    `podcast/add-podcast`,
    "POST",
    data
  );

  return response;
}
export async function EditPodcast(id, data) {
  let response = await HttpClient.requestData(
    `podcast/update-podcast/${id}`,
    "POST",
    data
  );

  return response;
}

export async function GetPodcast() {
  let response = await HttpClient.requestData(`podcast/get-podcast`, "GET");

  return response;
}
export async function DelPodcast(id) {
  let response = await HttpClient.requestData(
    `podcast/delete-podcast/${id}`,
    "PUT"
  );

  return response;
}


//................................ Podcast Album............................
export async function addPodcastAlbum(data) {
  let response = await HttpClient.requestData(
    `podcast/add-podcast-album`,
    "POST",
    data
  );

  return response;
}
export async function EditPodcastAlbum(id, data) {
  let response = await HttpClient.requestData(
    `podcast/update-podcast-album/${id}`,
    "POST",
    data
  );

  return response;
}

export async function GetPodcastAlbum() {
  let response = await HttpClient.requestData(`podcast/get-podcast-album`, "GET");

  return response;
}
export async function DelPodcastAlbum(id) {
  let response = await HttpClient.requestData(
    `podcast/delete-podcast-album/${id}`,
    "PUT"
  );

  return response;
}
//________________________________________Banner----------------------------------

export async function AddBannerApi(data) {
  let response = await HttpClient.requestData(
    `podcast/add-podcast-banner`,
    "POST",
    data
  );

  return response;
}
export async function EditBannerApi(id, data) {
  let response = await HttpClient.requestData(
    `podcast/update-podcast-banner/${id}`,
    "POST",
    data
  );

  return response;
}

export async function GetBannerApi() {
  let response = await HttpClient.requestData(
    `podcast/get-podcast-banner`,
    "GET"
  );

  return response;
}
export async function DelBannerApi(id) {
  let response = await HttpClient.requestData(
    `podcast/delete-podcast-banner/${id}`,
    "PUT"
  );

  return response;
}


//.................................... Ott Epiodes........................

export async function addOttEpisodes (data){
  let result = await HttpClient.requestData("ott/episode","POST",data)
  return result
}
export async function getOttEpisodes (data){
  let result = await HttpClient.requestData("ott/episode-get","GET")
  return result
}
export async function editOttEpisodes (id,data){
  let result = await HttpClient.requestData("ott/episode-update/"+id,"PUT",data)
  return result
}
export async function deleteOttEpisodes (id,data){
  let result = await HttpClient.requestData("ott/episode-delete/"+id,"PUT")
  return result
}

// .........................................Ott Banner......................


export async function addOttBanner (data){
  let result = await HttpClient.requestData("ott/ott-banner","POST",data)
  return result
}
export async function getOttBanner (data){
  let result = await HttpClient.requestData("ott/ott-banner","GET")
  return result
}
export async function editOttBanner (id,data){
  let result = await HttpClient.requestData("ott/update-ott-banner/"+id,"PUT",data)
  return result
}
export async function deleteOttBanner (id,data){
  let result = await HttpClient.requestData("ott/delete-ott-banner/"+id,"PUT")
  return result
}


///....................................news category.............................
export async function addNewsCategory (data){
  let result = await HttpClient.requestData("news-category","POST",data)
  return result
}
export async function getNewsCategory (data){
  let result = await HttpClient.requestData("news-category","GET")
  return result
}
export async function editNewsCategory (id,data){
  let result = await HttpClient.requestData("update-news-category/"+id,"PUT",data)
  return result
}
export async function deleteNewsCategory (id,data){
  let result = await HttpClient.requestData("delete-news-category/"+id,"PUT")
  return result
}


///////////////////////////////////////news Add ////////////////////////////
export async function addNews (data){
  let result = await HttpClient.requestData("news","POST",data)
  return result
}
export async function getNews (page=1){
  let result = await HttpClient.requestData(`news/${page}`,"GET")
  return result
}
export async function editNews (id,data){
  let result = await HttpClient.requestData("update-news/"+id,"PUT",data)
  return result
}
export async function deleteNews (id,data){
  let result = await HttpClient.requestData("delete-news/"+id,"PUT")
  return result
}

export async function newsImageUpload (file){
  let data = new FormData()
  data.append("image",file)
  let result = await HttpClient.fileUplode("newsImageUpload","POST",data)
  return result
}