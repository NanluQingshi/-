import httpInstance from "@/utils/request"

export const getInfo = () => {
  return httpInstance({
    url: '/home/category/head'
  })
}