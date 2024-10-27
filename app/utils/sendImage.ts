
export async function sendImage(request: FormData) {
    try {
        const response = await fetch('http://your-backend-server/upload', {
          method: 'POST',
          body: request,
        });
  
        if (response.ok) {
          alert("File uploaded successfully.");
        } else {
          alert("File upload failed.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("An error occurred while uploading the file.");
      }
}