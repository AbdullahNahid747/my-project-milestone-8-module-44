import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = () => {

     
    const priceOoptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 30.00,
            "features": [
              "Access to gym facilities",
              "Cardio machines",
              "Strength training equipment",
              "Locker room access",
              "Access to group fitness classes (limited)"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 50.00,
            "features": [
              "Access to gym facilities",
              "Cardio machines",
              "Strength training equipment",
              "Locker room access",
              "Access to all group fitness classes",
              "One complimentary personal training session per month",
              "Sauna access",
              "Discounts on merchandise"
            ]
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "price": 100.00,
            "features": [
              "Access to gym facilities",
              "Cardio machines",
              "Strength training equipment",
              "Locker room access",
              "Access to all group fitness classes",
              "Unlimited personal training sessions",
              "Sauna and spa access",
              "Towel service",
              "Nutritional consultation",
              "Discounts on supplements"
            ]
          }
        ]
      


    return (
        <div className="m-12">
            <h3 className="text-5xl">Memberships</h3>
            <div className=" grid md:grid-cols-3 gap-5">
                {
                    priceOoptions.map(option => <PriceOptions key={option.id} option={option}></PriceOptions>)
                }
            </div>
        </div>
    );
};

export default PriceOption;