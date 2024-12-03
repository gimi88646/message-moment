const SecurityCode = ({ classes, code }) => {
  return (
    <div className={classes}>
      <svg
        width="13"
        height="16"
        viewBox="0 0 13 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="maxTab:mb-[2px] mb1px scale-[0.98] scale0"
      >
        <path
          d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z"
          fill="#CCCCCC"
        />
      </svg>

      <p
        className={
          "text-dark font-jetBrain font-[700] text-[15px] ml-[-8px] pt-[1px] pl-2 pt2px MACFireFoxPaddingTop1px"
        }
      >
        {code}
      </p>
    </div>
  );
};

export default SecurityCode;
