export function featuredProducts(data){
    console.log(data);
    

    return data.filter(item =>{
        return item.featured===true;
    });
}