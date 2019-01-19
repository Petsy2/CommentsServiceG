from locust import HttpLocust, TaskSet, task


class UserBehavior(TaskSet):
  @task(1)
  def posttest(self):
    self.client.post("/reviews/1", {"review": "Chocolate cheese cake"})
  @task(2)
  def gettest(self):
    self.client.get("/reviews/1001")


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 2000
    max_wait = 10000

# cmd: locust --host=http://localhost:3003