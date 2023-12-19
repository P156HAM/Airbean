import './Logo.scss';

import React from 'react';
import { motion } from 'framer-motion';

function Logo() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  };

  return (
    <motion.article className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      <motion.svg
        width="38"
        height="35"
        viewBox="0 0 38 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__svg"
      >
        <motion.path
          d="M37.7379 31.0653C34.2801 21.3804 30.7706 11.7154 27.2651 2.04649C26.7564 0.652085 25.7906 -0.0271385 24.2326 0.000829499C20.7271 0.0647564 17.2176 0.0527701 13.7122 0.00482493C12.1621 -0.0151522 11.2519 0.69204 10.7392 2.11441C7.26555 11.7194 3.76005 21.3085 0.306233 30.9215C-0.592 33.4186 0.520855 34.9369 3.18376 34.9689C6.29577 35.0088 9.40382 34.9769 12.5158 34.9769C13.4498 34.9769 14.4077 35.0208 14.9045 33.974C15.3695 33.0071 14.7415 32.3359 14.2606 31.6287C12.4324 28.9478 11.3275 26.0071 11.0373 22.7548C10.9101 21.3045 11.5302 20.6213 12.9411 20.6173C14.9244 20.6093 16.9116 20.6173 18.8949 20.6173C18.8949 20.6133 18.8949 20.6093 18.8949 20.6093C20.8145 20.6093 22.7342 20.5813 24.6499 20.6173C26.7127 20.6532 27.2294 21.2685 26.9273 23.3541C26.4822 26.4266 25.3613 29.2354 23.6205 31.8085C22.3725 33.6584 22.9687 34.9249 25.1308 34.9569C28.4376 35.0128 31.7483 35.0208 35.0551 34.9449C37.4477 34.889 38.5447 33.3227 37.7379 31.0653ZM21.2915 11.4717C20.3456 12.6064 19.5904 13.7651 19.2526 15.2514C18.9386 16.6378 18.0642 16.6698 17.0905 15.7348C15.3973 14.1007 15.1986 11.0802 16.7646 8.99855C17.6429 7.83188 18.4617 6.72515 18.7558 5.20288C18.9942 3.98428 19.9362 3.86841 20.8145 4.76339C21.7803 5.73827 22.3129 6.92492 22.2931 8.44318C22.3765 9.50996 22.0268 10.5967 21.2915 11.4717Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </motion.article>
  );
}

export default Logo;