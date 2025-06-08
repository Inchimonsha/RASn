FROM rabbitmq:3.11-management

# COPY rabbitmq.conf /etc/rabbitmq/rabbitmq.conf
# COPY enabled_plugins /etc/rabbitmq/enabled_plugins

# RUN rabbitmq-plugins enable --offline rabbitmq_stomp rabbitmq_mqtt

EXPOSE 5672 15672
CMD ["rabbitmq-server"]