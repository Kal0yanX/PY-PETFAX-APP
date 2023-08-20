from flask import ( Blueprint, render_template, request, redirect ) 

bp = Blueprint('fact', __name__, url_prefix="/facts")

@bp.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print(request.form)
        return 'Thanks for submitting a fun fact!'
    return 'This is the facts index'

@bp.route("/new")
def fact():
    return render_template("new.html", )