function openNewWindow() {
    // Specify the URL and window dimensions
    var url = "https://storespark.streamlit.app";
    var width = 1000;
    var height = 600;
  
    // Calculate the position of the new window to place it at the right bottom corner of the screen
    var left = screen.width - width; // Adjusted for right alignment
    var top = screen.height - height; // Adjusted for bottom alignment
  
    // Open the new window with the specified dimensions and position
    window.open(url, "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
  }
  