import { kingDealsOfDay } from "../data";

export const BodyKingDealOfDayShow = () => {
    return (
        <div className="king-deal-show">
        {
            kingDealsOfDay.map((deal) => {
            return (
                <div className="king-deal-card">
                    <div className="king-deal-img">
                        <img src={deal.imgUrl} alt=''/>
                    </div>
                </div>
                );
            })
        }  
        </div>
    );
}