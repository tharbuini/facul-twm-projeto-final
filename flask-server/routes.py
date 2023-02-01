from flask import Blueprint, request, json, jsonify

CLIENTES = []
PRODUTOS = []
TECNICOS = []
TIPOS_SERVICO = []
ORDEM_SERVICO = []

urls_blueprint = Blueprint('urls', __name__,)

@urls_blueprint.route('/')
def index():    
    global CLIENTES
    CLIENTES = []
    carrega_cliente()
    ret = {"Status": "Backend is running"}
    print(CLIENTES)
    return ret

############################## CLIENTE ##############################

def carrega_cliente():
    global CLIENTES
    f = open('flask-server/database.json')
  
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
  
    # Iterating through the json
    # list
    for i in data['clientes']:        
        CLIENTES.append(i)

@urls_blueprint.route('/cliente', methods = ['POST'])
def add_cliente():
    global CLIENTES    
    req_data = request.get_json(force=True)
    clientes_json = {"nome": req_data['nome'], 
                    "endereco": req_data['endereco'], 
                    "email": req_data['email'], 
                    "celular": req_data['celular']}

    print(clientes_json)
    CLIENTES.append(clientes_json)
    ret = {"status": "Client has been added", 
           "clientes": CLIENTES}
    return ret

@urls_blueprint.route('/cliente', methods = ['PUT'])
def update_cliente_json():
    global CLIENTES
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_CLIENTES = len(CLIENTES)
        for i in range(tamanho_CLIENTES):
            if (nome_pesquisa in CLIENTES[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                CLIENTES[i]['nome']     = req_data['novo_nome']
                CLIENTES[i]['endereco'] = req_data['endereco']
                CLIENTES[i]['email'] = req_data['email']
                CLIENTES[i]['celular']  = req_data['celular']
                ret = {"status": "Cliente encontrado",
                "clientes": CLIENTES[i]}
                break
            else:
                ret = {"status": "Cliente não encontrado"}

    except Exception as e:
        ret = {"status": "Cliente não encontrado"}
    return ret


@urls_blueprint.route('/cliente', methods = ['DELETE'])
def delete_cliente_json():
    global CLIENTES
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_CLIENTES = len(CLIENTES)
        posicao = 0
        for i in range(tamanho_CLIENTES):
            if (nome_pesquisa in CLIENTES[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                CLIENTES.remove(CLIENTES[i])
                break
            else:
                ret = {"status": "Cliente não encontrado"}

    except Exception as e:
        ret = {"status": "Cliente não encontrado"}
    return ret


@urls_blueprint.route('/cliente', methods = ['GET'])
def get_cliente_all():    
    global CLIENTES
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_CLIENTES = len(CLIENTES)
        for i in range(tamanho_CLIENTES):
            if (nome_pesquisa in CLIENTES[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                ret = {"status": "Cliente encontrado",
                "clientes": CLIENTES[i]}
                break
            else:
                ret = {"status": "Cliente não encontrado",
               "clientes": []}

    except Exception as e:
        ret = {"status": "Lista de clientes",
        "clientes": CLIENTES}
    return ret

############################## PRODUTOS ##############################


############################## TÉCNICOS ##############################


############################## TIPOS DE SERVIÇO ##############################


############################## ORDEM DE SERVIÇO ##############################