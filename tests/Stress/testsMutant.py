import base64
import datetime
import json
from locust import HttpLocust, TaskSet, task
import random

class MutantBehavior(TaskSet):
    key_cookie = None
    headers = {'content-type': 'application/json'}
    content = {}
    session_key = None
    @task
    def behavior(self):
        self.isMutant()
        
    
    def randomDNAChain(self):
        validChars = ["A", "T", "C", "G"]

        N = random.randint(0,10)
        dna = []
        for i in range(N):
            chain = ""
            for i in range(N):
                letter = validChars[random.randint(0,3)]
                chain = chain + letter
            dna.append(chain)
        return dna

    def isMutant(self):


        key_cookie = "admin" + str(random.randint(0,1001))
        key_cookie = base64.b64encode(key_cookie.encode('utf-8')).decode('utf-8')
        self.key_cookie = key_cookie
        response = self.client.post('/mutant/',
                                    data=json.dumps({'dna': self.randomDNAChain()}),
                                    headers=self.headers,verify=False)
        self.content = json.loads(response.content.decode('utf-8'))

    

    
class WebsiteUser(HttpLocust):
    task_set = MutantBehavior
    min_wait = 5000
    max_wait = 9000