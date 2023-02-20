import styles from "../../styles";

const Text = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-white font-poppins font-semibold ss:text-6xl text-4xl ss:leading-[70px] leading-[44px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient"> Generation</span> {""}
          Payment Method.
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </>
  );
};

export default Text;
