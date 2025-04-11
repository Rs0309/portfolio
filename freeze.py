from flask_frozen import Freezer
from app import app

freezer = Freezer(app)

@freezer.register_generator
def index():
    yield {}

if __name__ == '__main__':
    print("Starting freeze process...")
    print("Static folder:", app.static_folder)
    print("Static URL path:", app.static_url_path)
    freezer.freeze()
    print("Freezing complete. Static files have been generated.")