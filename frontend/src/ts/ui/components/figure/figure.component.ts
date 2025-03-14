function figureComponent({ id, src, url, name, alt }: any){
    return(`
        
        <figure id="${id}">
            <img 
                src="${src ?? url}"
                alt="${alt ?? name }"
            />
        </figure>
        
    `)
}

export default figureComponent