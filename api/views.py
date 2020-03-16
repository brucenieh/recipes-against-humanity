from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

@main.route('/ingredients')
def ingredients():
    ingedients = []
    ingedient_list = ["chicken","beef","shrimp","lamb"]
    for i in range(len(ingedient_list)):
        ingedients.append({"id":    str(i),
                           "name":  ingedient_list[i]})

    return jsonify(ingedients)