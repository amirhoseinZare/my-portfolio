export default function Hero(){
    return (
        <div className="hero">
            <div className="hero-background__vawe--bottom">
                <svg className="hero-background__vawe--bottom--svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path className="hero-background__vawe--bottom--path" d="M0.00,49.99 C183.63,248.97 337.69,-94.44 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>
            <div className="hero-background__vawe--bottom" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"  className="hero-background__vawe--bottom--svg">
                    <path className="hero-background__vawe--bottom--path" path d="M-4.28,109.82 C293.11,-32.26 288.03,299.30 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"></path>
                </svg>
            </div>
            <div style={{opacity:"1", bottom: "0",transform: "scaleX(1.1)"}} className="hero-background__vawe--bottom" >
                <svg style={{opacity:"1"}} viewBox="0 0 500 150" preserveAspectRatio="none" className="hero-background__vawe--bottom--svg">
                    <path className="hero-background__vawe--bottom--path" d="M0.00,49.99 C-0.90,150.29 499.66,151.28 500.00,49.99 L499.66,152.26 L-0.90,150.29 Z" style={{opacity:"1", stroke: "none", fill: "#fff"}}>
    
                    </path>
                </svg>
            </div>
    
        </div>)
}