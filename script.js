//1.Flattening array
// let arr=[[1,3,5],[2,4,6],[7,9,5]]
// function find(arr){
//   return arr.flat();
// }
// console.log(find(arr));

//2.Binary search
// let nums=[3,6,1,2,5]
// let tar=2;
// for(let i=0; i<nums.length; i++){
//   if(nums[i]==tar){
//     console.log(i)
//   }
// }

//3.Array deduplication
// let arr=[2,5,1,6,7,2,7]
// for(let i=0; i<arr.length; i++) {
//   for(let j=i+1; j<arr.length; j++) {
//     if(arr[i]==arr[j]) {
//       arr.splice(j,1)
//       j--;
//     }
//   }
// }
// console.log(arr)


//4.Intersection of two arrays
// let arr1=[1,3,5,6,4]
// let arr2=[2,4,6,7,9]
// let temp=[]
// for(let i=0; i<arr1.length; i++) {
//   for(let j=0;j<arr2.length;j++){
//     if(arr1[i]==arr2[j]){
//       temp.push(arr1[i])
//     }
//   }
// }
// console.log(temp)

//5.Merging of two arrays and returning with ascending order
// let nums1=[1,3,5,7,9]
// let nums2=[2,4,6,8]
// let res=[]
// function Merging(nums1,nums2){
//   res=nums1.concat(nums2)
//   return res.sort()
// }
// console.log(Merging(nums1,nums2))


//6.
