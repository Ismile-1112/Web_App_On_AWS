import React from 'react';

// components
import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from './NutritionCard';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal />
            <div className="my-6">
               <NutritionCarousal />
            </div>
            <div className="flex justify-between flex-wrap">
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
               <NutritionCard 
                 bg="red"
                 image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
               />
            </div>
        </div>
    );
};

export default Nutrition;
