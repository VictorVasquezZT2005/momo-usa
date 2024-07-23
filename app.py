from flask import Flask, request, redirect, url_for, render_template, make_response, session, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'mi_clave_secreta'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'username' in session:
        return redirect(url_for('index'))
    
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            session['username'] = user.username
            resp = make_response(redirect(url_for('index')))
            resp.set_cookie('session', 'active')
            return resp
        flash('Nombre de usuario o contraseña incorrectos')
    return render_template('pages/login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm-password']
        if password == confirm_password:
            hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
            new_user = User(username=username, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('login'))
        else:
            flash('Las contraseñas no coinciden')
    return render_template('pages/register.html')

@app.route('/index')
def index():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('pages/index.html')

@app.route('/search')
def search():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('pages/search.html')

@app.route('/manga')
def manga():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('pages/manga.html')

@app.route('/anime')
def anime():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('pages/anime.html')

@app.route('/anime/<path:filename>')
def anime_files(filename):
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template(f'components/anime/{filename}')

@app.route('/manga/<path:filename>')
def manga_files(filename):
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template(f'components/manga/{filename}')

@app.route('/profile')
def profile():
    if 'username' not in session:
        return redirect(url_for('login'))
    username = session.get('username', 'Nombre de Usuario')
    return render_template('pages/profile.html', username=username)

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    resp = make_response(redirect('/login'))
    resp.set_cookie('session', '', expires=0)
    return resp

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
