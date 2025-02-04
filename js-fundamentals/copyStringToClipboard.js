// Write a JavaScript program to copy a string to the clipboard.

const copyToClipboard = async (text) => {
	try {
	  await navigator.clipboard.writeText(text);
	  console.log("Copied to clipboard: " + text);
	} catch (err) {
	  console.error("Failed to copy: ", err);
	}
  };

  copyToClipboard("Hello, World!");
