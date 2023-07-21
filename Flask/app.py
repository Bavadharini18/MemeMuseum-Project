# from flask import Flask, render_template
# app = Flask(__name__)
# @app.route('/')
# def index():
#     return render_template('index.html')
# if __name__ == '__main__':
#     app.run()

# **********************************************************************************************************************************************************

from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('D:/College/Naan Mudhalvan Project/naan mudhalvan/naan mudhalvan', 'index.html')

@app.route('/login.html')
def login():
    return send_from_directory('D:/College/Naan Mudhalvan Project/naan mudhalvan/naan mudhalvan', 'login.html')

@app.route('/reg.html')
def register():
    return send_from_directory('D:/College/Naan Mudhalvan Project/naan mudhalvan/naan mudhalvan', 'reg.html')

@app.route('/img 3.png')
def image():
    return send_from_directory('D:/College/Naan Mudhalvan Project/naan mudhalvan/naan mudhalvan', 'img 3.png')

@app.route('/script.js')
def script():
    return send_from_directory('D:/College/Naan Mudhalvan Project/naan mudhalvan/naan mudhalvan', 'script.js')

if __name__ == '__main__':
    app.run()
