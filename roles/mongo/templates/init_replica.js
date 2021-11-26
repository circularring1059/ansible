var rs_conf = {
      "_id": "replica1",
      "members": [
       {% for i in play_hosts %}
          { "_id": {{loop.index0}},
            "host": "{{i~":27017"}}"
          },
       {% endfor %}
       ]
}

rs.initiate(rs_conf);
