import React from "react";

const styles = {
  backgroundColor: "#1b1b23",
};

function Footer(props) {
  return (
    <div className="footer">
      <footer style={styles}>
        <address>
          Contact Us:
          <br />
          abcde@gmail.com
          <br />
          NH-16 Chaitanya Knowledge City
        </address>
      </footer>{" "}
    </div>
  );
}

export default Footer;
