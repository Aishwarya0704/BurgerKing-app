import { ourMenuBurgerList } from "../data";

export const BodyOurMenuBurgerShow = () => {
    return (
        <div className="body-ourmenu-burger-show">
        {
            ourMenuBurgerList.map((ourMenuBurger) => {
            return (
                <>
                {/* <div className="prev-btn">{'<'}</div> */}
                <div className="ourmenu-burger-card">
                    <div className="ourmenu-burger-card-image">
                        <img src={ourMenuBurger.imgUrl} alt='' />
                    </div>
                    <p>{ourMenuBurger.name}</p>
                </div>
                {/* <div className="next-btn">{'>'}</div> */}
                </>

            );
        })
    }  
    </div>
    );
}