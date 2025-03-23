// Suggested code may be subject to a license. Learn more: ~LicenseLog:4533206467.

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FooterBar: React.FC = () => {
  const appVersion = useSelector((state: RootState) => state.footer.appVersion);
  const copyrightYear = useSelector(
    (state: RootState) => state.footer.copyrightYear
  );
  const companyName = useSelector(
    (state: RootState) => state.footer.companyName
  );
  const showDisclaimer = useSelector(
    (state: RootState) => state.footer.showDisclaimer
  );

  return (
    <footer className="w-full bg-yellow-400 text-gray-900 p-6 text-center">
      <div className="container mx-auto">
        <p>
          &copy;{copyrightYear} {companyName}. All rights reserved. Version:{" "}
          {appVersion}
        </p>
        {/* {showDisclaimer && (
          <p style={{ fontSize: "0.8em", marginTop: "10px" }}>Disclaimer: Sample Footer.</p>
        )} */}
      </div>
    </footer>
  );
};

export default FooterBar;
