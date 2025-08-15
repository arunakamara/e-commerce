import requests
import os

# Create local folder for images
os.makedirs("images", exist_ok=True)

# Fetch product data from API
products = requests.get("https://fakestoreapi.com/products").json()

# Download each image
for i, product in enumerate(products, start=1):
    img_url = product['image']
    img_data = requests.get(img_url).content
    file_name = f"images/product_{i}.jpg"
    with open(file_name, "wb") as f:
        f.write(img_data)
    print(f"Downloaded {file_name}")

print("✅ All images downloaded to 'images' folder.")
