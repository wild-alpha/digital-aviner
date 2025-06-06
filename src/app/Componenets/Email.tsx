// components/Email.js

const Email = () => {
    const handleEmailClick = () => {
      const emailAddress = 'info@wdfitout.com';
      const subject = 'Inquiry or Message'; // You can customize the subject
  
      // Construct the mailto link
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  
      // Open the default email client
      window.location.href = mailtoLink;
    };
  
    return (
      <button
        onClick={handleEmailClick}
        className="bg-[#c38d90] text-white font-bold py-2 px-4 rounded"
      >
        Send Enquiry Now
      </button>
    );
  };
  
  export default Email;
  