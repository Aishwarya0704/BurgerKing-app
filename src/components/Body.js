import { BodyExploreFullMenu } from "./BodyExploreFullMenu";
import { BodyFavouriteBurgerList } from "./BodyFavouriteBurgerList";
import { BodyOurMenuBurgerList } from "./BodyOurMenuBurgerList";
import { BodyBkWall } from "./BodyBkWall";
import { BodyDisclaimer } from "./BodyDisclaimer";
import { BodyKingDealOfDayList } from "./BodyKingDealOfDayList";

export const Body = () => {
    return (
        <div className="body-burger">
            <BodyOurMenuBurgerList/>
            <BodyKingDealOfDayList/>
            <BodyFavouriteBurgerList />
            <BodyExploreFullMenu />
            <BodyBkWall />
            <BodyDisclaimer/>
        </div>
    );
}