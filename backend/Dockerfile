FROM python:3.10.7
ENV PYTHONONUNBUFFERED 1
RUN mkdir /backend
COPY ./ /backend
WORKDIR /backend
ADD requirements.txt /backend/
RUN pip install -r requirements.txt
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]