import request from "@/utils/request";
//广告
export const getBannerRes = () =>
  request({
    url: "/banner",
  });
//主页发现导航
export const homepage = () =>
  request<any>({
    url: "/homepage/dragon/ball",
  });
//歌单
export const getPlaylistReq = () =>
  request<any>({
    url: "/personalized",
    method: "GET",
    data: {
      limit: 8,
    },
  });
// //推荐新歌
  export const getPodcastReq = () =>
  request< songDataType>({
    url: "/personalized/newsong",
    method: "GET",
    data: {
      limit: 6,
    },
  });
  //首页发现信息
  export const getHomepage = () =>
  request< songDataType>({
    url: "/homepage/block/page",
    method: "GET",
    data:{
      refresh:false
    }
  });