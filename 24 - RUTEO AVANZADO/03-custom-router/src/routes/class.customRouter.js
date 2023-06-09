import { Router as CustomRouter } from "express";
import { checkAuth } from "../jwt/auth.js";

export default class Router {
  constructor() {
    this.router = CustomRouter(); //const router = Router()
    this.init();
  }

  getRouter() {
    return this.router;
  }

  get(path, roles, ...cb) {
    this.router.get(
      path,
      this.generateResponse,
      this.managerRoles(roles),
      this.resolveCallbacks(cb)
    );
  }
  post(path, roles, ...cb) {
    this.router.post(
      path,
      this.generateResponse,
      this.managerRoles(roles),
      this.resolveCallbacks(cb)
    );
  }
  put(path, roles, ...cb) {
    this.router.put(
      path,
      this.generateResponse,
      this.managerRoles(roles),
      this.resolveCallbacks(cb)
    );
  }
  delete(path, roles, ...cb) {
    this.router.delete(
      path,
      this.generateResponse,
      this.managerRoles(roles),
      this.resolveCallbacks(cb)
    );
  }

  resolveCallbacks(callbacks) {
    return callbacks.map((cb) => async (...params) => {
      try {
        await cb.apply(this, params);
      } catch (error) {
        console.log(error);
      }
    });
  }

  generateResponse(req, res, next) {
    res.success = (statusCode, data) =>
      res.status(statusCode).json({ status: "success", info: data });
    res.failure = (statusCode, data) =>
      res.status(statusCode).json({ status: "failure", info: data });
    next();
  }

  managerRoles(roles) {
    return async (req, res, next) => {
      if (roles.includes("PUBLIC")) {
        next();
      }
      const authHeader = req.get("Authorization");
      if (!authHeader) return res.json({ message: "Error autorizacion" });
      const user = await checkAuth(req, res, next);
      // console.log('role usuario', user.role);
      if (roles.includes(user.role.toUpperCase())) {
        next();
      }
    };
  }
}
