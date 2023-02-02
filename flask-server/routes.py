from flask import Blueprint, request, json, jsonify, Flask
from flask_cors import CORS

CLIENTES = []
PRODUTOS = []
TECNICOS = []
TIPOS_SERVICO = []
ORDENS_SERVICO = []

urls_blueprint = Blueprint('urls', __name__,)

@urls_blueprint.route('/')
def index():    
    global CLIENTES, PRODUTOS, TECNICOS, TIPOS_SERVICO, ORDENS_SERVICO
    carrega_cliente()
    carrega_produto()
    carrega_tecnico()
    carrega_tiposervico()
    carrega_ordemservico()
    ret = {"Status": "Backend is running"}
    return ret

############################## CLIENTE ##############################

def carrega_cliente():
    global CLIENTES
    f = open('flask-server/database-clientes.json')
  
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

@urls_blueprint.route('/cliente', methods = ['DELETE'])
def delete_cliente_json():
    global CLIENTES
    try:
        req_data = request.get_json(force=True)
        nome_pesquisa = req_data['nome']
        tamanho_CLIENTES = len(CLIENTES)
        i = 0
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

def carrega_produto():
    global PRODUTOS
    f = open('flask-server/database-produtos.json')
  
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
  
    # Iterating through the json
    # list
    for i in data['produtos']:        
        PRODUTOS.append(i)

@urls_blueprint.route('/produto', methods = ['POST'])
def add_produto():
    global PRODUTOS    
    req_data = request.get_json(force=True)
    produtos_json = {"nome": req_data['nome'], 
                     "id": req_data['id'], 
                     "categoria": req_data['categoria']}

    print(produtos_json)
    PRODUTOS.append(produtos_json)
    ret = {"status": "Product has been added", 
           "produtos": PRODUTOS}
    return ret

@urls_blueprint.route('/produto', methods = ['DELETE'])
def delete_produto_json():
    global PRODUTOS
    try:
        req_data = request.get_json(force=True)
        id_pesquisa = req_data['id']
        tamanho_PRODUTOS = len(PRODUTOS)
        i = 0
        for i in range(tamanho_PRODUTOS):
            if (id_pesquisa in PRODUTOS[i]['id']):
                print("Achei!!!")
                print({"id": req_data['id']})
                PRODUTOS.remove(PRODUTOS[i])
                break
            else:
                ret = {"status": "Produto não encontrado"}

    except Exception as e:
        ret = {"status": "Produto não encontrado"}
    return ret


@urls_blueprint.route('/produto', methods = ['GET'])
def get_produto_all():    
    global PRODUTOS
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_PRODUTOS = len(PRODUTOS)
        for i in range(tamanho_PRODUTOS):
            if (nome_pesquisa in PRODUTOS[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                ret = {"status": "Produto encontrado",
                "produtos": PRODUTOS[i]}
                break
            else:
                ret = {"status": "Produto não encontrado",
               "produtos": []}

    except Exception as e:
        ret = {"status": "Lista de produtos",
        "produtos": PRODUTOS}
    return ret

############################## TÉCNICOS ##############################

def carrega_tecnico():
    global TECNICOS
    f = open('flask-server/database-tecnicos.json')
  
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
  
    # Iterating through the json
    # list
    for i in data['tecnicos']:        
        TECNICOS.append(i)

@urls_blueprint.route('/tecnico', methods = ['POST'])
def add_tecnico():
    global TECNICOS    
    req_data = request.get_json(force=True)
    tecnicos_json = {"nome": req_data['nome'], 
                     "email": req_data['email'], 
                     "celular": req_data['celular'],
                     "area-servico": req_data['area-servico']}

    print(tecnicos_json)
    TECNICOS.append(tecnicos_json)
    ret = {"status": "Technical has been added", 
           "tecnicos": TECNICOS}
    return ret

@urls_blueprint.route('/tecnico', methods = ['DELETE'])
def delete_tecnico_json():
    global TECNICOS
    try:
        req_data = request.get_json(force=True)
        nome_pesquisa = req_data['nome']
        tamanho_TECNICOS = len(TECNICOS)
        i = 0
        for i in range(tamanho_TECNICOS):
            if (nome_pesquisa in TECNICOS[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                TECNICOS.remove(TECNICOS[i])
                break
            else:
                ret = {"status": "Técnico não encontrado"}

    except Exception as e:
        ret = {"status": "Técnico não encontrado"}
    return ret


@urls_blueprint.route('/tecnico', methods = ['GET'])
def get_tecnico_all():    
    global TECNICOS
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_TECNICOS = len(TECNICOS)
        for i in range(tamanho_TECNICOS):
            if (nome_pesquisa in TECNICOS[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                ret = {"status": "Técnico encontrado",
                "tecnicos": TECNICOS[i]}
                break
            else:
                ret = {"status": "Técnico não encontrado",
               "tecnicos": []}

    except Exception as e:
        ret = {"status": "Lista de tecnicos",
        "tecnicos": TECNICOS}
    return ret

############################## TIPOS DE SERVIÇO ##############################

def carrega_tiposervico():
    global TIPOS_SERVICO
    f = open('flask-server/database-tiposservico.json')
  
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
  
    # Iterating through the json
    # list
    for i in data['tipos-servico']:        
        TIPOS_SERVICO.append(i)

@urls_blueprint.route('/tipos-servico', methods = ['POST'])
def add_tipos_servico():
    global TIPOS_SERVICO    
    req_data = request.get_json(force=True)
    tipos_servico_json = {"nome": req_data['nome'], 
                          "id": req_data['id']}

    print(tipos_servico_json)
    TIPOS_SERVICO.append(tipos_servico_json)
    ret = {"status": "Service type has been added", 
           "tipos-servico": TIPOS_SERVICO}
    return ret

@urls_blueprint.route('/tipos-servico', methods = ['DELETE'])
def delete_tipos_servico_json():
    global TIPOS_SERVICO
    try:
        req_data = request.get_json(force=True)
        id_pesquisa = req_data['id']
        tamanho_TIPOS_SERVICO = len(TIPOS_SERVICO)
        i = 0
        for i in range(tamanho_TIPOS_SERVICO):
            if (id_pesquisa in TIPOS_SERVICO[i]['id']):
                print("Achei!!!")
                print({"id": req_data['id']})
                TIPOS_SERVICO.remove(TIPOS_SERVICO[i])
                break
            else:
                ret = {"status": "Tipo de serviço não encontrado"}

    except Exception as e:
        ret = {"status": "Tipo de serviço não encontrado"}
    return ret


@urls_blueprint.route('/tipos-servico', methods = ['GET'])
def get_tipos_servico_all():    
    global TIPOS_SERVICO
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_TIPOS_SERVICO = len(TIPOS_SERVICO)
        for i in range(tamanho_TIPOS_SERVICO):
            if (nome_pesquisa in TIPOS_SERVICO[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                ret = {"status": "Tipo de serviço encontrado",
                "tipos-servico": TIPOS_SERVICO[i]}
                break
            else:
                ret = {"status": "Tipo de serviço não encontrado",
               "tipos-servico": []}

    except Exception as e:
        ret = {"status": "Lista de tipos de servico",
        "tipos-servico": TIPOS_SERVICO}
    return ret

############################## ORDEM DE SERVIÇO ##############################

def carrega_ordemservico():
    global ORDENS_SERVICO
    f = open('flask-server/database-ordensservico.json')
  
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
  
    # Iterating through the json
    # list
    for i in data['ordens-servico']:        
        ORDENS_SERVICO.append(i)

@urls_blueprint.route('/ordens-servico', methods = ['POST'])
def add_ordens_servico():
    global ORDENS_SERVICO    
    req_data = request.get_json(force=True)
    ordens_servico_json = {"id": req_data['id'],
                           "descricao": req_data['descricao'],
                           "nome-cliente": req_data['nome-cliente'],
                           "nome-produto": req_data['nome-produto'],
                           "servico": req_data['servico'],
                           "categoria": req_data['categoria']}

    print(ordens_servico_json)
    ORDENS_SERVICO.append(ordens_servico_json)
    ret = {"status": "Service order has been added", 
           "ordens-servico": ORDENS_SERVICO}
    return ret

@urls_blueprint.route('/ordens-servico', methods = ['DELETE'])
def delete_ordens_servico_json():
    global ORDENS_SERVICO
    try:
        req_data = request.get_json(force=True)
        id_pesquisa = req_data['id']
        tamanho_ORDENS_SERVICO = len(ORDENS_SERVICO)
        i = 0
        for i in range(tamanho_ORDENS_SERVICO):
            if (id_pesquisa in ORDENS_SERVICO[i]['id']):
                print("Achei!!!")
                print({"id": req_data['id']})
                ORDENS_SERVICO.remove(ORDENS_SERVICO[i])
                break
            else:
                ret = {"status": "Ordem de serviço não encontrada"}

    except Exception as e:
        ret = {"status": "Ordem de serviço não encontrada"}
    return ret


@urls_blueprint.route('/ordens-servico', methods = ['GET'])
def get_ordens_servico_all():    
    global ORDENS_SERVICO
    try:
        req_data = request.get_json()
        nome_pesquisa = req_data['nome']
        tamanho_ORDENS_SERVICO = len(ORDENS_SERVICO)
        for i in range(tamanho_ORDENS_SERVICO):
            if (nome_pesquisa in ORDENS_SERVICO[i]['nome']):
                print("Achei!!!")
                print({"nome": req_data['nome']})
                ret = {"status": "Ordem de serviço encontrada",
                "ordens-servico": ORDENS_SERVICO[i]}
                break
            else:
                ret = {"status": "Ordem de serviço não encontrada",
               "ordens-servico": []}

    except Exception as e:
        ret = {"status": "Lista de ordens de servico",
        "ordens-servico": ORDENS_SERVICO}
    return ret