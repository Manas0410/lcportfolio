const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {/* <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div> */}
        <a
          href="https://www.linkedin.com/in/lokshana-chavan-3803a0207/"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.figma.com/design/DUHd6kB7WZMbTPypxvkIjn/Works?node-id=477-5350&t=HpE1ztZdKJxHDSGO-1"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/figmaic.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://dribbble.com/poodles"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/dribble.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.instagram.com/ui_ux_by_lolzzz/"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">
        © 2025 Lokshana Chavan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
