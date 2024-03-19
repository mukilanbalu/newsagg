const API_END_POINT =  "https://newaggsrvr.onrender.com";

export const newsFetch = async ({ request, params })=>{
    let data = await fetch(
      `${API_END_POINT}/news`
    );
    return data.json();
}
export const indiaNews = async ()=>{
    let data = await fetch(
      `${API_END_POINT}/news/country/india`
    );
    return data.json();
}

export const sportsNews = async ()=>{
    let data = await fetch(
      `${API_END_POINT}/news/category/sports`
    );
    return data.json();
}

export const techNews = async ()=>{
    let data = await fetch(
      `${API_END_POINT}/news/category/tech`
    );
    return data.json();
}