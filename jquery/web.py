from flask import Flask, render_template, request, jsonify
from flask.helpers import url_for

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


if __name__=='__main__':
    app.run(debug=True)