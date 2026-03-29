const getStoredBook =()=>
{
 const storedBookSTR = localStorage.getItem("ReadItem");

 if(storedBookSTR)
 {
   const storedBookData = JSON.parse(storedBookSTR);
   return storedBookData;
 }
 else
 {
    return [];
 }
}

const addToStoredDB=(id)=>
{
 const storedBookData= getStoredBook();

 if(storedBookData.includes(id))
 {
    alert('this book is already added');
 }
 else
 {
     storedBookData.push(id);
     const data = JSON.stringify(storedBookData);
     localStorage.setItem('ReadItem',data)
 }
}

export {addToStoredDB,getStoredBook}