export function GoogleIcon({iconName , color = 'white', size = 16}){
    const sizeStd = size + 'px'
    return (
    <span className="material-symbols-outlined" 
        style={{fontSize:sizeStd, color : color}}>{iconName}</span>)
}